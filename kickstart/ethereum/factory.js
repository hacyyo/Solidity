import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x70Ac46D135d1f773475290387f5B3C2b11454122'
);

export default instance;