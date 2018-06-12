class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :name
      t.integer :quantity
      t.string :category
      t.boolean :purchase

      t.timestamps
    end
  end
end
