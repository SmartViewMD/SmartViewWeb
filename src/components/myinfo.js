<div className="container">
      <h1>Enter Password</h1>
     
      <div className="form-group">
        <label>Password</label>
        <textarea className="form-control" value={this.state.review} onChange={this.setReview} />
 
        {/**********   This is where the magic happens     ***********/}
        {this.validator.message('password', this.state.review, 'required|min:8|max:20')}
 
      </div>
      <button className="btn btn-primary" onClick={this.submitForm}>Submit</button>
    </div>