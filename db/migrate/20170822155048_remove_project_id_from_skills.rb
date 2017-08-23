class RemoveProjectIdFromSkills < ActiveRecord::Migration[5.1]
  def change
    remove_column :skills, :project_id, :integer
  end
end
