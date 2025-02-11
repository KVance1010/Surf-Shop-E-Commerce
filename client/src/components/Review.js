import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { useCartContext } from '../utils/cartContext';
import { useQuery } from '@apollo/client';
import { QUERY_ITEMS_BY_NAMES } from '../utils/queries';

export default function Review(props) {
    let cardX = 'XXXX-'
    for(let i = props.paymentInfo.cardNumber.length-4; i < props.paymentInfo.cardNumber.length; i++){
            cardX += props.paymentInfo.cardNumber[i].toString()
    }

    const { cart } = useCartContext()

    const itemNameList = []
    for(let key in cart){
        itemNameList.push(key)
    }

    const { loading, data } = useQuery(QUERY_ITEMS_BY_NAMES, {
        variables: {names: itemNameList}
    })
    
    const items = data?.itemsByNames || []

    let total = 0
    for(let i = 0; i < items.length; i++){
        total += items[i].price * cart[items[i].name]
    }

    return (
        <React.Fragment>
        <Typography variant="h6" gutterBottom>
            Order summary
        </Typography>
        <List disablePadding>
            {items.map((item) => (
            <ListItem key={item.name} sx={{ py: 1, px: 0 }}>
                <ListItemText primary={`${item.name} $${item.price} X ${cart[item.name]}` }  />
                {/* <ListItemText primary={`X ${cart[item.name]}`}/> */}
                <Typography variant="body2">{item.price * cart[item.name]}</Typography>
            </ListItem>
            ))}

            <ListItem sx={{ py: 1, px: 0 }}>
            <ListItemText primary="Total" />
            <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                ${total}
            </Typography>
            </ListItem>
        </List>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                Shipping
            </Typography>
            <Typography gutterBottom>{`${props.shippingAddress.firstName} ${props.shippingAddress.lastName}`}</Typography>
            <Typography gutterBottom>{`${props.shippingAddress.address1} ${props.shippingAddress.address2}, ${props.shippingAddress.city}, ${props.shippingAddress.state}, ${props.shippingAddress.zip}, ${props.shippingAddress.country}`}</Typography>
            </Grid>
            <Grid item container direction="column" xs={12} sm={6}>
            <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                Payment details
            </Typography>
            <Grid container>
                
                <React.Fragment >
                    <Grid item xs={6}>
                    <Typography gutterBottom>{`CardHolder`}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                    <Typography gutterBottom>{props.paymentInfo.cardName}</Typography>
                    </Grid>
                </React.Fragment>
                <React.Fragment >
                    <Grid item xs={6}>
                    <Typography gutterBottom>{`Card Number`}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                    <Typography gutterBottom>{cardX}</Typography>
                    </Grid>
                </React.Fragment>
                <React.Fragment >
                    <Grid item xs={6}>
                    <Typography gutterBottom>{`Expiration Date`}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                    <Typography gutterBottom>{props.paymentInfo.expDate}</Typography>
                    </Grid>
                </React.Fragment>
               
            </Grid>
            </Grid>
        </Grid>
        </React.Fragment>
    );
    }