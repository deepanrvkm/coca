import mongoose from 'mongoose';

const chartDataSchema = new mongoose.Schema({
  month: String,
  value: Number
}, { collection: 'chartdata' });

const ChartDataModel = mongoose.models.ChartData || mongoose.model('ChartData', chartDataSchema);

export default ChartDataModel;