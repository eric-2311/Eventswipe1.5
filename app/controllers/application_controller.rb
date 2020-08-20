class ApplicationController < ActionController::Base

    #Allowing methods to be called in views
    helper_method :logged_in?, :current_user

    #Resetting user session token to login user
    def login(user)
        session[:session_token] = user.reset_session_token!
    end

    #Finding current user
    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    #Logging out a user
    def logout
        current_user.reset_session_token!
        session[:session_token] = nil
    end

    #Checking if user is logged in
    def logged_in?
        !!current_user
    end

end
