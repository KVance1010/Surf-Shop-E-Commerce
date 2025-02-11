import * as React from 'react';
import { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddressForm from '../components/AddressForm';
import PaymentForm from '../components/PaymentForm';
import Review from '../components/Review';
import { useCartContext } from '../utils/cartContext';
import { QUERY_ITEMS_BY_NAMES } from '../utils/queries';
import { UPDATE_STOCKS_BY_NAMES } from '../utils/mutations';
import { ADD_ORDER } from '../utils/mutations';
import { UPDATE_ITEM } from '../utils/mutations';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



const steps = ['Shipping address', 'Payment details', 'Review your order'];


function getStepContent(step, handleShippingAddress, shippingAddress, handlePaymentInfo, paymentInfo) {
  switch (step) {
    case 0:
      return <AddressForm handleShippingAddress={handleShippingAddress}/>;
    case 1:
      return <PaymentForm handlePaymentInfo={handlePaymentInfo}/>;
    case 2:
      return <Review shippingAddress={shippingAddress} paymentInfo={paymentInfo}/>;
    default:
      throw new Error('Unknown step');
  }
}

const theme = createTheme();

export default function Checkout() {
  const [shippingAddress, setShippingAddress] = useState({})
  const handleShippingAddress = (address) => setShippingAddress(address)

  const [paymentInfo, setPaymentInfo] = useState({})
  const handlePaymentInfo = (paymentInfo) => setPaymentInfo(paymentInfo)

  //convert cart object into order object
  const { cart } = useCartContext()

  const itemNameList = []
  for(let key in cart){
      itemNameList.push(key)
  }

  const { loading, data } = useQuery(QUERY_ITEMS_BY_NAMES, {
      variables: {names: itemNameList}
  })
  const [addOrder, {error, orderData}] = useMutation(ADD_ORDER)
  const [updateStocks, {updateStocksError, updateStocksData}] = useMutation(UPDATE_STOCKS_BY_NAMES)
  
  const items = data?.itemsByNames || []

  let total = 0
  for(let i = 0; i < items.length; i++){
      total += items[i].price * cart[items[i].name]
  }

  const itemPrices = []
  const itemQuantities = []
  const newStocks = []
  const itemNames = []
  const itemImages = []

  items.map((item) => {
    itemPrices.push(item.price)
    itemQuantities.push(cart[item.name])
    newStocks.push(item.stock - cart[item.name])
    itemNames.push(item.name)
    itemImages.push(item.image)
  })
  const [activeStep, setActiveStep] = React.useState(0);
  const { clearCart } = useCartContext()

  const [addressError, setAddressError] = useState('')

  const handleNext =  () => {
    //when order is submitted
    if(activeStep === steps.length - 1) {
      try{
        
        const { data } =  addOrder({
          variables: {
            email: (localStorage.getItem('email')),
            itemNames: itemNames,
            itemPrices: itemPrices,
            itemQuantities: itemQuantities,
            itemImages: itemImages,
            createdAt: JSON.stringify(Date.now())
          }
        })
        const { stocksData } = updateStocks({
          variables: {
            names: itemNames,
            stocks: newStocks
          }
        })

      }catch(e){
        console.error(e)
      }
      clearCart()
      setActiveStep(activeStep + 1)
    }
    //address form validation
    if(activeStep === 0){
      // if(false){
      if(!shippingAddress.firstName || !shippingAddress.lastName || !shippingAddress.address1 || !shippingAddress.city || !shippingAddress.state || !shippingAddress.zip || !shippingAddress.country){
        setAddressError('you must fill out all required fields!')

      }
      else{
        setAddressError('')
        setActiveStep(activeStep + 1)
      } 
      //payment form validation
    }else  if(activeStep === 1){
      if(!paymentInfo.cardName || !paymentInfo.cardNumber || !paymentInfo.expDate || !paymentInfo.cvv){
        setAddressError('you must fill out all required fields!')
      }else{
        setAddressError('')
        setActiveStep(activeStep + 1)
      }
    } else {
      setActiveStep(activeStep + 1)
    }
    ;
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1">
                Your order number is #2001539. We have emailed your order
                confirmation, and will send you an update when your order has
                shipped.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep, handleShippingAddress, shippingAddress, handlePaymentInfo, paymentInfo)}
              <p style={{"color": "red"}}>{addressError}</p>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}

                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
        <Copyright />
      </Container>
    </ThemeProvider>
  );
}