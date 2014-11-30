class Addpassword < ActiveRecord::Migration
  def change
    change_table :users do |t|
      t.string :password_digest
      t.remove :password
    end
  end
end
