import React, {useState, Fragment} from 'react';
import {Link, withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {createProfile} from '../../actions/profile';

const CreateProfile = ({createProfile,history}) => {
    const [formData, setFormData]= useState({
      company: '',
      website:'',
      status: '',
      skills: '',
      bio:''
    });
    
    const {
      company,
      website,
      status,
      skills,
      bio
    } =formData;
    const onChange = e=> setFormData({...formData,[e.target.name]: e.target.value});
    const onSubmit= e=>{
        e.preventDefault();
        createProfile(formData,history);
    }
    return (
        <Fragment>
          <h1 className="large text-primary">
        Create Your Profile
      </h1>
      <p cl="lead">
        <i className="fas fa-user"></i> Let's get some information to make your
        profile stand out
      </p>
      <small>* = required field</small>
      <form className="form" onSubmit={e=> onSubmit(e)}>
        <div className="form-group">
          <select name="status" value={status} onChange={e=> onChange(e)}>
            <option value="0">* Select Professional Status</option>
            <option value="Expert">Expert</option>
            <option value="Enterpreneur">Enterpreneur</option>
            <option value="Whole-Seller">Whole-Seller</option>
          </select>
          <small className="form-text"
            >Give us an idea of where you are at in your career</small>
          
        </div>
        <div className="form-group">
          <input type="text" placeholder="Company" name="company" value={company} onChange={e=>onChange(e)} />
          <small className="form-text"
            >Could be your own company or one you work for</small
          >
        </div>
        <div className="form-group">
          <input type="text" placeholder="Website" name="website" value={website} onChange={e=>onChange(e)} />
          <small className="form-text"
            >Could be your own or a company website</small
          >
        </div>
        
        <div className="form-group">
          <input type="text" placeholder="* Skills" name="skills" value={skills} onChange={e=>onChange(e)}/>
          <small className="form-text"
            >Please use comma separated values </small>
          
        </div>
        
        <div className="form-group">
          <textarea placeholder="A short bio of yourself" name="bio"value={bio} onChange={e=>onChange(e)}></textarea>
          <small className="form-text">Tell us a little about yourself</small>
        </div>
        
        <input type="submit" className="btn btn-primary my-1" />
        <Link className="btn btn-light my-1" to="/dashboard">Go Back</Link>
      </form>
        </Fragment>
    )
};
CreateProfile.propTypes={
  createProfile: PropTypes.func.isRequired
};

export default connect(null,{createProfile})(withRouter(CreateProfile));