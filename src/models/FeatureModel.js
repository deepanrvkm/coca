import mongoose from 'mongoose';

const featureSchema = new mongoose.Schema({
  imageOnLeft: { type: Boolean, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
}, { collection: 'features' });

const FeatureModel = mongoose.models.Feature || mongoose.model('Feature', featureSchema);

export default FeatureModel;
