class Project < ApplicationRecord
  belongs_to :skill
  mount_uploader :picture, PictureUploader
end
