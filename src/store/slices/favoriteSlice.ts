import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface Article {
  id: string;
  author: string | null;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}
interface FavoriteState {
    favorites: Article[];
}

const initialState: FavoriteState = {
    favorites: [],
};

const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        addFavorite: (state, action: PayloadAction<ArticleDetails>) => {
            state.favorites.push(action.payload);
        },
        removeFavorite: (state, action: PayloadAction<string>) => {
            state.favorites = state.favorites.filter(favorite => favorite.id !== action.payload);
        },
    },
});

export const {addFavorite, removeFavorite} = favoriteSlice.actions;
export default favoriteSlice.reducer;
