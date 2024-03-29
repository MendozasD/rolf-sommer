# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_09_08_174418) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "banners", force: :cascade do |t|
    t.boolean "visible"
    t.text "content"
    t.string "url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "jobs", force: :cascade do |t|
    t.string "piece"
    t.string "role"
    t.string "genre"
    t.string "responsible"
    t.string "location"
    t.date "start_date"
    t.date "end_date"
    t.string "directed_by"
    t.string "musiker"
    t.string "choreo"
    t.string "url"
    t.text "comment"
    t.boolean "actor"
    t.boolean "director"
    t.boolean "texter"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "premiered"
    t.boolean "visible"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "admin"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  create_table "visible_banners", force: :cascade do |t|
    t.boolean "visibility"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
