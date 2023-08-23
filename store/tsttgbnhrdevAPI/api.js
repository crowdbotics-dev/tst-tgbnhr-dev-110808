import axios from "axios"
const tsttgbnhrdevAPI = axios.create({
  baseURL: "https://tst-tgbnhr-dev-110808.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return tsttgbnhrdevAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_bbn_list(payload) {
  return tsttgbnhrdevAPI.get(`/api/v1/bbn/`)
}
function api_v1_bbn_create(payload) {
  return tsttgbnhrdevAPI.post(`/api/v1/bbn/`, payload)
}
function api_v1_bbn_retrieve(payload) {
  return tsttgbnhrdevAPI.get(`/api/v1/bbn/${payload.id}/`)
}
function api_v1_bbn_update(payload) {
  return tsttgbnhrdevAPI.put(`/api/v1/bbn/${payload.id}/`, payload)
}
function api_v1_bbn_partial_update(payload) {
  return tsttgbnhrdevAPI.patch(`/api/v1/bbn/${payload.id}/`, payload)
}
function api_v1_bbn_destroy(payload) {
  return tsttgbnhrdevAPI.delete(`/api/v1/bbn/${payload.id}/`)
}
function api_v1_ggh_list(payload) {
  return tsttgbnhrdevAPI.get(`/api/v1/ggh/`)
}
function api_v1_ggh_create(payload) {
  return tsttgbnhrdevAPI.post(`/api/v1/ggh/`, payload)
}
function api_v1_ggh_retrieve(payload) {
  return tsttgbnhrdevAPI.get(`/api/v1/ggh/${payload.id}/`)
}
function api_v1_ggh_update(payload) {
  return tsttgbnhrdevAPI.put(`/api/v1/ggh/${payload.id}/`, payload)
}
function api_v1_ggh_partial_update(payload) {
  return tsttgbnhrdevAPI.patch(`/api/v1/ggh/${payload.id}/`, payload)
}
function api_v1_ggh_destroy(payload) {
  return tsttgbnhrdevAPI.delete(`/api/v1/ggh/${payload.id}/`)
}
function api_v1_login_create(payload) {
  return tsttgbnhrdevAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return tsttgbnhrdevAPI.post(`/api/v1/signup/`, payload)
}
function rest_auth_login_create(payload) {
  return tsttgbnhrdevAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_retrieve(payload) {
  return tsttgbnhrdevAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return tsttgbnhrdevAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return tsttgbnhrdevAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return tsttgbnhrdevAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return tsttgbnhrdevAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return tsttgbnhrdevAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return tsttgbnhrdevAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return tsttgbnhrdevAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return tsttgbnhrdevAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return tsttgbnhrdevAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_bbn_list,
  api_v1_bbn_create,
  api_v1_bbn_retrieve,
  api_v1_bbn_update,
  api_v1_bbn_partial_update,
  api_v1_bbn_destroy,
  api_v1_ggh_list,
  api_v1_ggh_create,
  api_v1_ggh_retrieve,
  api_v1_ggh_update,
  api_v1_ggh_partial_update,
  api_v1_ggh_destroy,
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
