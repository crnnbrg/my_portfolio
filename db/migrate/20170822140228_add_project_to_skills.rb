class AddProjectToSkills < ActiveRecord::Migration[5.1]
  def change
    add_reference :skills, :project, foreign_key: true
  end
end
