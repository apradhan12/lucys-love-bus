<template>
    <div class="container">
        <input class="event-name" placeholder="Name of Event">
        <div class="form">
            <div class="form-element">
                <input type="date" id="date" size="50" placeholder="Day/Month/Year">
                <input type="text" id="location" size="60" placeholder="Location" >
            </div>
            <div class="form-element">
                <input type="text" id="start-time" size="30" placeholder="Start Time">
                <p>to</p>
                <input type="text" id="end-time" size="30" placeholder="End Time">
            </div>
            <div class="form-element">
                <textarea id="description" rows="10" cols="100"
                placeholder="Description"></textarea>
            </div>
            <div class="form-element">
                <textarea id="what-to-bring" rows="7" cols="100"
                placeholder="What to Bring"></textarea>
            </div>
        </div>
        <div class="buttons">
            <button id="create-button">Create</button>
        </div>
    </div>
</template>


<style scoped>

.container {
    margin: 3rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.event-name {
    margin-bottom: 16px;
    font-size: 30pt;
    font-family: 'Raleway';
}

.form {
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    border: 1px solid #ccc;
    padding: 12px;
}

.form-element {
    display: flex;
    flex-direction: row;
    margin-right: 10px;
    font-family: 'Montserrat';
}

input[type=text], input[type=date], textarea {
  padding: 12px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  margin: 12px;
  font-family: 'Montserrat';
  font-size: 15px;
}

</style>
