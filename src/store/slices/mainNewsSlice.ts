import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface Source {
  id: string | null;
  name: string;
}

interface Article {
    id: string;
  source: Source;
  author: string | null;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

interface NewsApiResponse {
  status: string;
  totalResults: number;
  articles: Article[];
}

interface MainNewsState {
  articles: Article[];
  loading: boolean;
  error: string | null;
}

const initialState: MainNewsState = {
  articles: [],
  loading: false,
  error: null,
};

// Create async thunk for fetching news using axios
export const fetchNews = createAsyncThunk(
  'mainNews/fetchNews',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get<NewsApiResponse>(
        'https://newsapi.org/v2/top-headlines?country=us&apiKey=6a7c9b908250426f94a9224edde63fdc'
      );
      return response.data.articles;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data?.message || error.message);
      }
      return rejectWithValue('An unknown error occurred');
    }
  }
);

const mainNewsSlice = createSlice({
  name: 'mainNews',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.articles = action.payload;
        state.loading = false;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default mainNewsSlice.reducer;