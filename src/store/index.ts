import {configureStore} from '@reduxjs/toolkit';
import MainNewsReducer from './slices/mainNewsSlice';
import FavoritesReducer from './slices/favoriteSlice';

export const store = configureStore({
  reducer: {
    mainNews: MainNewsReducer, // Add your main news slice reducer here
    favorites: FavoritesReducer, // Add your favorites slice reducer here
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false, // Avoid warnings with AsyncStorage
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export default store;
