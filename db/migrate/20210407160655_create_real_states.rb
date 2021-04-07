class CreateRealStates < ActiveRecord::Migration[6.1]
  def change
    create_table :real_states do |t|
      t.string :data

      t.timestamps
    end
  end
end
