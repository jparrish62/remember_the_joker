class CreateScores < ActiveRecord::Migration[5.0]
  def change
    create_table :scores do |t|
      t.string :name
      t.integer :score
      t.integer :high_score
      t.integer :streak

      t.timestamps
    end
  end
end
