import React from 'react'
import { getLayout } from '@/layouts/DefaultLayout'
import { Button } from '@/components/ui/button'
import { useState, useEffect } from 'react'

function Address() {
  const [addresses, setAddresses] = useState({});
  const [step, setStep] = useState(1);
  const [addAddress, setAddAddress] = useState(false);
  const mockCustomer: { name: string, address: string[] } = {
    name: "Bob",
    address: ["123 Main St", "123 Pine St"]
  }
  const mockAddresses: { name: string, address: string, default: boolean }[] = [
    {
      name: "Bob",
      address: "123 Main St",
      default: false
    },
    {
      name: "Marky Mark",
      address: "123 King St", default: true
    }
  ]
  useEffect(() => {
    setAddresses(mockAddresses);
  }, [])
  const addNewAddress = (event:any) => {
    event.preventDefault();
    console.log(event.target[0].value);
    console.log(event.target[1].value);
  }
  const toggleAddressForm = () => {
    setAddAddress(!addAddress);
  }
  // const addressMapper = (addressArray: string[]) => {
  //   return addressArray.map((address) => {
  //     return (<div><input type="radio" value={address} /> <label> {customer.name} {address} </label></div>)
  //   })
  // }
  const addressArrayMapper = (addressArray: { name: string, address: string, default: boolean }[]) => {
    return addressArray.map((address) => {
      return (<div className=""><input type="radio" key={addressArray.indexOf(address)} value={address.address} /> <label className="font-bold">
        {address.name} </label> <label> {address.address} </label> <label className="text-primary font-bold">
          {address.default && (
            "Default address"
          )}
        </label>
      </div>)
    })
  }

  return (
    // <div className="bg-paleBlue h-screen w-screen pl-10 pt-24">
    <>
    <div className="text-largeText text-brand">
      Pickup Details
    </div>
    <div className="text-brand">
      Select or add your pickup address
    </div>
    <div className="font-bold text-brand text-smallText mt-5">
      Your Addresses:
    </div>
      <div className="w-3/4 border-black border-t-2">

        <form className="mt-5">
          {addressArrayMapper(mockAddresses)}
        </form>
      </div>
      <Button className="bg-transparent hover:bg-transparent text-primary font-bold" onClick={toggleAddressForm}>+ Add a new address </Button>
      { addAddress && (<form className="flex flex-column justify-around w-1/3" onSubmit={(e) => addNewAddress(e)}>
        <div className="flex flex-row">
          <div>
            <label>Name</label> <label>Address</label>
          </div>
          <div>
            <input type="text" name="name" />
            <input type="text" name="address" />
          </div>
        </div>
        <div className="flex justify-around">
          <button className="text-primary" type="submit">Add new address</button>
        </div>
      </form>)}
      
      <span className="flex justify-between" >
        <Button className="bg-transparent hover:bg-transparent text-primary font-bold">← Back </Button>
        <Button className="next text-white font-bold"  > Next → </Button>
      </span>

    </>
    // </div>
  )
}
Address.getLayout = getLayout

export default Address
