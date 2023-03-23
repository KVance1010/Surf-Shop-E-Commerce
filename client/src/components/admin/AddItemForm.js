import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { ADD_ITEM } from '../../utils/mutations'

const AddItemForm = () => {

    const [formState, setFormState] = useState({})
    const [addItem, {error, data}] = useMutation(ADD_ITEM)
    let tagsArray = []

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value
        })
    }
    const handleTagsChange = (event) => {
        const {name, value} = event.target
        tagsArray = value.split(',')
        let trimmedTagsArray = tagsArray.map((tag) => {
            return tag.trim()
        })

        setFormState({
            ...formState,
            [name]: trimmedTagsArray
        })
    }
    const handlePriceChange = (event) => {
        const {name, value} = event.target
        let price = parseFloat(value)
        setFormState({
            ...formState,
            [name]: price
        })
    }
    const handleStockChange = (event) => {
        const { name, value } = event.target
        let stock = parseInt(value)
        setFormState({
            ...formState,
            [name]: stock
        })
    }

    const handleBooleanChange = async (event) => {
        const { name, value } = event.target
        let result
        if(value === 'on'){
            result = true
        }else{
            result = false
        }
        setFormState({
            ...formState,
            [name]: result
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(formState)

        try{
            const {data} = await addItem({
                variables: {...formState}
            })
            document.getElementById('success').textContent = 'Item Added to inventory!'
        }catch (e){
            console.error(e)
        }
    }
    

    return(
        <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label >Item Name</label><br/>
                    <input type="text" className="form-control" name="name" id="itemName" onChange={handleChange}/>
                </div>
                <div className="form-group">
                    <label>Price</label><br/>
                    <input type="text" className="form-control" id="itemPrice" name='price'onChange={handlePriceChange}/>
                </div>
                <div className="form-group">
                    <label>Description</label><br/>
                    <input type="text" className="form-control" id="itemDescription" name='description'onChange={handleChange}/>
                </div>
                <div className="form-group">
                    <label>Tags: separate with comma, no spaces. example: "tag1,tag2,tag3"</label><br/>
                    <input type="text" className="form-control" id="itemTags" name='tags' onChange={handleTagsChange}/>
                </div>
                <div className="form-group">
                    <label>Stock</label><br/>
                    <input type="text" className="form-control" id="itemStock" name='stock' onChange={handleStockChange}/>
                </div>
                <div className="form-group">
                    <label>Brand</label><br/>
                    <input type="text" className="form-control" id="itemBrand" name='brand' onChange={handleChange}/>
                </div>
                <div className="form-group">
                    <label>Image URL</label><br/>
                    <input type="text" className="form-control" id="itemBrand" name='image' onChange={handleChange}/>
                </div><br/>
                {/* <div className="form-group">
                    <label >tag 1</label><br/>
                    <input type="text" className="form-control" id="tag1" />
                </div>
                <div className="form-group">
                    <label>tag 2</label><br/>
                    <input type="text" className="form-control" id="tag2" />
                </div>
                <div className="form-group">
                    <label>tag 3</label><br/>
                    <input type="text" className="form-control" id="itemDescription" />
                </div> */}
                <div className="form-group row">
                    <div className="col-sm-10">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="bestSeller" name='bestSeller' onChange={handleBooleanChange}/>
                            <label className="form-check-label" for="gridCheck1">
                                Best Seller?
                            </label>
                        </div>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-10">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="saleItem" name='saleItem' onChange={handleBooleanChange}/>
                            <label className="form-check-label" for="gridCheck1">
                                Sale Item?
                            </label>
                        </div>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-10">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="newArrival" name='newArrival' onChange={handleBooleanChange}/>
                            <label className="form-check-label" for="gridCheck1">
                                New Arrival?
                            </label>
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                { error && (
                <div
                  style={{color:'red'}}
                  className="text-center">
                  {'something went wrong. Check to make sure all the data you entered is of the correct type'}
                </div>               
              )}
              <div
                  style={{color:'green'}}
                  className="text-center" id='success'>
                  
            </div> 
            </form>
            
    )
}

export default AddItemForm