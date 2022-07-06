import React from 'react'

const Dividendinformation = () => {
  return (
      <div className='container'> 

<form >
  <h1>1. Dividend Infromation of The Claim</h1>
  <div className='row'>
    <div className='col-35'>
      <label for="fname">Claimant Type:</label>
      <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
    </div>
    {/* <div className='col-75'>
      <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
    </div>*/}
  </div> 

   <div className='row'>
    <div className='col-35'>
      <label for="lname">Claim Type:</label>
      <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
    </div>
    {/* <div className='col-75'>
      <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
    </div> */}
  </div>

  <div className='row'>
    <div className='col-35'>
      <label for="lname">BO ID:</label>
      <input type="text" id="lname" name="lastname" placeholder="as per NID"/>
    </div>
    {/* <div className='col-75'>
      <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
    </div> */}
  </div>

  <div className='row'>
    <div className='col-25'>
      <label for="country">Issuer Company:</label>
    </div>
    <div className='col-75'>
      <select id="country" name="country">
        <option value="australia">AAMRANET</option>
        <option value="canada">ACIFORMULA</option>
        <option value="usa">BATBC</option>
        <option value="usa">BDTHAI</option>
        <option value="usa">BEXIMCO</option>
        <option value="usa">IBNSINA</option>
      </select>
    </div>
  </div>

  <div className='row'>
    <div className='col-35'>
      <label for="lname">Dividend Year:</label>
      <input type="text" id="lname" name="lastname" placeholder="something@gmail.com"/>
    </div>
  </div>

  <div className='row'>
    <div className='col-35'>
      <label for="lname">Amount:</label>
      <input type="text" id="lname" name="lastname" placeholder="choose a strong password"/>
    </div>
  </div>

  {/* <div className='row'>
    <div className='col-25'>
      <label for="country">Country</label>
    </div>
    <div className='col-75'>
      <select id="country" name="country">
        <option value="australia">Australia</option>
        <option value="canada">Canada</option>
        <option value="usa">USA</option>
      </select>
    </div>
  </div> */}
  {/*<div className='row'>
    <div className='col-25'>
      <label for="subject">Subject</label>
    </div>
    <div className='col-75'>
      <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>
    </div>
  </div>
  {/*<div className='row'>
    <input type="submit" value="Submit"/>
  </div> */}
  <button className='button'>Proceed</button>
</form>

</div>
  )
}

export default Dividendinformation;
