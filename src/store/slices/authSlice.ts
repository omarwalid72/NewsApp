// src/store/slices/authSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import auth from '@react-native-firebase/auth';

interface AuthState {
  user: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
};

export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }: { email: string; password: string }, thunkAPI) => {
    try {
      const res = await auth().signInWithEmailAndPassword(email, password);
      return res.user.email;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const register = createAsyncThunk(
  'auth/register',
  async ({ email, password }: { email: string; password: string }, thunkAPI) => {
    try {
      const res = await auth().createUserWithEmailAndPassword(email, password);
      return res.user.email;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


export const logout = createAsyncThunk('auth/logout', async () => {
  await auth().signOut();
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<string>) {
      state.user = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(login.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action: any) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(logout.fulfilled, state => {
        state.user = null;
      });
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
