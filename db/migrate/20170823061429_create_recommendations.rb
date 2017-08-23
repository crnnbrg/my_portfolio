class CreateRecommendations < ActiveRecord::Migration[5.1]
  def change
    create_table :recommendations do |t|
      t.belongs_to :user, foreign_key: true
      t.string :name
      t.string :detail
      t.integer :rating

      t.timestamps
    end
  end
end
