class User < ApplicationRecord
    
    #Basic validations for user
    validates :email, presense: true, uniqueness: true
    validates :password, length: { 6, allow_nil: true}
    validates :session_token, presense: true, uniquness: true

    #Ensure that a user is logged in if a new user instance is created
    after_initialize :ensure_session_token

    attr_reader :password

    #Generating a new session token
    def self.generate_session_token
        SecureRandom::urlsafe_base64
    end

    #Resetting session token
    def self.reset_session_token!
        self.update!(session_token: self.class.generate_session_token)
        self.session_token 
    end

    #Ensuring a session token
    def ensure_session_token
        self.session_token ||= self.class.generate_session_token
    end

    #Password creation
    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    #Checking for valid password
    def is_password?(password)
        encrypted = BCrypt::Password.new(self.password_digest)
        encrypted.is_password?(password)
    end

    #Checking for existing user
    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)

        #Returning nil if a user does not exist
        return nil unless user && user.is_password?(password)

        #Return user if user found
        user
    end

end