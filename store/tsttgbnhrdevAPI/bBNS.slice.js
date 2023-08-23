import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_bbn_list = createAsyncThunk(
  "bBNS/api_v1_bbn_list",
  async payload => {
    const response = await apiService.api_v1_bbn_list(payload)
    return response.data
  }
)
export const api_v1_bbn_create = createAsyncThunk(
  "bBNS/api_v1_bbn_create",
  async payload => {
    const response = await apiService.api_v1_bbn_create(payload)
    return response.data
  }
)
export const api_v1_bbn_retrieve = createAsyncThunk(
  "bBNS/api_v1_bbn_retrieve",
  async payload => {
    const response = await apiService.api_v1_bbn_retrieve(payload)
    return response.data
  }
)
export const api_v1_bbn_update = createAsyncThunk(
  "bBNS/api_v1_bbn_update",
  async payload => {
    const response = await apiService.api_v1_bbn_update(payload)
    return response.data
  }
)
export const api_v1_bbn_partial_update = createAsyncThunk(
  "bBNS/api_v1_bbn_partial_update",
  async payload => {
    const response = await apiService.api_v1_bbn_partial_update(payload)
    return response.data
  }
)
export const api_v1_bbn_destroy = createAsyncThunk(
  "bBNS/api_v1_bbn_destroy",
  async payload => {
    const response = await apiService.api_v1_bbn_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const bBNSSlice = createSlice({
  name: "bBNS",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_bbn_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_bbn_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_bbn_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_bbn_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_bbn_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_bbn_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_bbn_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_bbn_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_bbn_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_bbn_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_bbn_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_bbn_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_bbn_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_bbn_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_bbn_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_bbn_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_bbn_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_bbn_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_bbn_list,
  api_v1_bbn_create,
  api_v1_bbn_retrieve,
  api_v1_bbn_update,
  api_v1_bbn_partial_update,
  api_v1_bbn_destroy,
  slice: bBNSSlice
}
