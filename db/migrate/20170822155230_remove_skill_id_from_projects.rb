class RemoveSkillIdFromProjects < ActiveRecord::Migration[5.1]
  def change
    remove_column :projects, :skill_id, :integer
  end
end
