<?php
ini_set('display_errors',1);
require_once("databases.php");
class Motivos
{
	private $con;
	public function __construct()
	{
		$this->con = new Database();
        $this->con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    	$this->con->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
    	if($_POST){
    		echo "POST";
    	}
    	if($_GET)
    	{
    		$action = $_GET['action'];
			$id 	= $_GET['id'];
			
    	}
    	switch ($action) {
    		case 'get':
    			echo $this->getMotivos($id);
				break;
			case 'insert':
				echo $this->insertMotivos($id, $_GET['des_motivo'], $_GET['estado'], $_GET['tipo']);
				break;
			case 'update':
				echo $this->updateMotivos($id, $_GET['des_motivo'], $_GET['estado'], $_GET['tipo']);
				break;
    		default:
    			echo "Bad Request";
    			break;
    	}
	}
	
	private function getMotivos($id)
	{
		try{
			$str='SELECT * from motivos_get3(:_id);';
			$codMotivos = (is_null($id) ? -1 : $id );
			$query = $this->con->prepare($str);
			$query->bindParam(':_id', $codMotivos, PDO::PARAM_INT);
			$query->execute();
			$this->con->close_con();
			$q= $query->fetchAll(PDO::FETCH_OBJ);
			echo json_encode($q);
		} catch(PDOException $e) {
			echo json_encode($e->getMessage()); 
		}
	}

	private function insertMotivos($id, $des_motivo, $estado, $tipo)
	{
		try{
			$str='INSERT INTO motivos_es_gt (motivo,des_motivo,estado,tipo) values (:_id,:_desmotivo,:_estado,:_tipo);';
			$query = $this->con->prepare($str);
			$query->bindParam(':_id', $id, PDO::PARAM_INT);
			$query->bindParam(':_desmotivo', $des_motivo, PDO::PARAM_STR);
			$query->bindParam(':_estado', $estado, PDO::PARAM_STR);
			$query->bindParam(':_tipo', $tipo, PDO::PARAM_STR);
			$query->execute();
			$this->con->close_con();
			$q= $query->fetchAll(PDO::FETCH_OBJ);
			echo json_encode($q);
		} catch(PDOException $e) {
			echo json_encode($e->getMessage()); 
		}
	}

	private function updateMotivos($id, $des_motivo, $estado, $tipo)
	{
		try{
			$str='UPDATE motivos_es_gt SET des_motivo = :_desmotivo ,estado = :_estado ,tipo = :_tipo WHERE motivo = :_id;';
			$query = $this->con->prepare($str);
			$query->bindParam(':_id', $id, PDO::PARAM_INT);
			$query->bindParam(':_desmotivo', $des_motivo, PDO::PARAM_STR);
			$query->bindParam(':_estado', $estado, PDO::PARAM_STR);
			$query->bindParam(':_tipo', $tipo, PDO::PARAM_STR);
			$query->execute();
			$this->con->close_con();
			$q= $query->fetchAll(PDO::FETCH_OBJ);
			echo json_encode($q);
		} catch(PDOException $e) {
			echo json_encode($e->getMessage()); 
		}
	}
}
$P = new Motivos();
?>