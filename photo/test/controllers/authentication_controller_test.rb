require "test_helper"

class AuthenticationControllerTest < ActionDispatch::IntegrationTest
  test "should get firebase_auth" do
    get authentication_firebase_auth_url
    assert_response :success
  end
end
