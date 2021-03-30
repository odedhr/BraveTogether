import mongoose, { Schema } from 'mongoose'

/*
 * Data baise design:
 * User schema - main table
 * Hero schema - contains the hero details for internal use,
 *               can be added to the user schema
 * Relives Loneliness Schema - contain the additinal information for the reliver
 *                             the details need to be exicuted to the Google sheets
 *                             merges with the detail from the user schema.
 */

const schema = mongoose.schema;

export const UserSchema = new Schema({
    firstName:{
        type:String,
        required: 'Enter a first name'
    },
    lastName:{
        type:String,
        required: 'Enter a last name'
    },
    phoneNumber:{
        type:Number,
        required: 'Enter a first name'
    },
    /*
    picture:{
        TODO *******
    },
    */
    email:{
        type:String,
        required: 'Enter a email address'
    },
    password:{
        type:String,
        required: 'Enter a password'
    }
  });

export const HeroSchema = new Schema({
    location:{
        type:String,
        required: 'Enter a location name'
    },
    interests:{
        type: [String],
        required: 'Enter interests'
    }
  });

  export const volunteerSchema = new Schema({
    lackOfCriminalRecord:{
        type:Boolean,
    },
    CommitmentToPrivacy:{
        type:Boolean,
    }
  });

  export const RelivesLonelinessSchema = new Schema({
    approved:{
        type:Boolean,
    }
  });