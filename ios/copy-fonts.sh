#!/bin/bash

# Create the fonts directory if it doesn't exist
mkdir -p pe2pia/Fonts

# Copy all font files from node_modules to the iOS project
cp -r ../node_modules/react-native-vector-icons/Fonts/* pe2pia/Fonts/

echo "Fonts copied successfully!" 