<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Delete_model extends CI_Model
{
	public function deleteDataRole($id)
	{
		$this->db->where('id', $id);
		$this->db->delete('user_role');
	}

	public function getRoleById($id)
	{
		return $this->db->get_where('user_role', ['id' => $id])->row_array();
	}


	public function changeDataRole()
	{
		$data = [
			"id" => $this->input->post('id', true),
			"role" => $this->input->post('role', true)
		];

		$this->db->where('id', $this->input->post('id'));
		$this->db->update('user_role', $data);
	}


	public function deleteDataUser($id)
	{
		$this->db->where('id', $id);
		$this->db->delete('user');
	}



	public function deleteDataToken($id)
	{
		$this->db->where('id', $id);
		$this->db->delete('user_token');
	}

}