class Contact < ActiveRecord::Base
  def self.findInAll(query)
    return self.where("name LIKE :name OR surname LIKE :surname OR email LIKE :email OR phone LIKE :phone ",
               {
                   :name => '%'+query+'%',
                   :surname => '%'+query+'%',
                   :email => '%'+query+'%',
                   :phone => '%'+query+'%'
               }
    )
  end
end