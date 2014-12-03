class AddMillisField < ActiveRecord::Migration
  def change
    change_table :friends do |t|
      t.integer :last_contacted_milli
    end
  end
end
