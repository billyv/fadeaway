class Init < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name
      t.string :password
    end

    create_table :friends do |t|
      t.string :name
      t.string :phone
      t.string :email
      t.string :facebook
      t.string :line
      t.integer :user_id
      t.datetime :last_contacted
    end
  end
end
