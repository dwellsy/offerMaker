import React, { useEffect, useState } from "react"
import { Surface } from "../../atoms/containers/Surface"
import styled from "styled-components"
import { Input } from "../../atoms/form/Input"

const Container = styled.div`
  display: grid;
  justify-content: space-between;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1em;
`

export const DataInput = ({ data, onChange }) => {
  const [ state, setState ] = useState(data)

  const handleChange = e => {
    e.preventDefault()
    setState({ ...state, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    onChange(state)
  }, [ state, onChange ])

  return (
    <>
      <h4>Employee Details</h4>
      <Surface>
        <Container>
          <Input
            type="text"
            name="firstName"
            placeholder="First Name"
            defaultValue={data.firstName}
            onChange={handleChange}
          />
          <Input
            type="text"
            name="lastName"
            placeholder="Last Name"
            defaultValue={data.lastName}
            onChange={handleChange}
          />
          <Input
            type="text"
            name="streetAddress"
            placeholder="Street Address"
            defaultValue={data.streetAddress}
            onChange={handleChange}
          />
          <Input
            type="text"
            name="city"
            placeholder="City"
            defaultValue={data.city}
            onChange={handleChange}
          />
          <Input
            type="text"
            name="state"
            placeholder="State"
            defaultValue={data.state}
            onChange={handleChange}
          />
          <Input
            type="text"
            name="postCode"
            placeholder="Postcode"
            defaultValue={data.postCode}
            onChange={handleChange}
          />
        </Container>
      </Surface>

      <h4>Offer Details</h4>
      <Surface>
        <Container>
          <Input
            type="text"
            name="title"
            placeholder="Title"
            defaultValue={data.title}
            onChange={handleChange}
          />
          <Input
            type="text"
            name="salary"
            placeholder="Salary"
            defaultValue={data.salary}
            onChange={handleChange}
          />
          <Input
            type="text"
            name="stockOptions"
            placeholder="Stock Options"
            defaultValue={data.stockOptions}
            onChange={handleChange}
          />
          <Input
            type="date"
            name="startDate"
            placeholder="Start Date"
            defaultValue={data.startDate}
            onChange={handleChange}
          />
          <Input
            type="text"
            name="supervisor"
            placeholder="Supervisor Name"
            defaultValue={data.supervisor}
            onChange={handleChange}
          />
          <Input
            type="text"
            name="supervisorTitle"
            placeholder="Supervisor Title"
            defaultValue={data.supervisorTitle}
            onChange={handleChange}
          />
        </Container>
      </Surface>
    </>
  )
}

export default DataInput
