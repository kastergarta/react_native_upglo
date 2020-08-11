import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  FlatList,
  Button,
  Platform,
  ActivityIndicator,
  StyleSheet
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

// import HeaderButton from '../../components/UI/HeaderButton';
// import ProductItem from '../../components/shop/ProductItem';
// import * as cartActions from '../../store/actions/cart';
// import * as productsActions from '../../store/actions/products';
// import Colors from '../../constants/Colors';

const NewsScreen = props => {
    return (
       <h1>Aricles</h1>
    );
};

export default NewsScreen;