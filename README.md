# EscrowShield (HackCanada 2025)

## 🏠 Project Idea
EscrowShield is a solution designed to eliminate as many intermediary fees as possible when buying and selling property by replacing traditional escrow services with a free web app. This initiative aims to benefit the Canadian real estate market by providing a cost-effective and transparent solution for both buyers and sellers.

Users can log into the app via their MetaMask account, which pulls down their public wallet addresses via the MetaMask API and our JavaScript code. The app has two main features: the buyer's page and the seller's pages. When listing a property, sellers are required to input the house address and postal code, after which they are provided with a key, which is used to securely facilitate the transaction. Additionally, both sellers and buyers must enter each other's public MetaMask addreses when completing a transaction, as well as the ID of the property (communicated by the seller to the buyer) and the terms that are required for the sale to go through, including:
 - The inputted public addresses must match the addresses pulled down by the MetaMask API
 - The generated property ID that is created when the seller first lists their property must be inputted by both parties in order to match them
 - When the buyer inputs the house address, it must match that which was added by the seller
 
If any of these conditions are not met, the transaction is cancelled and the funds are returned to the buyer. Subsequently, a smart contract is deployed to the ICP network containing the terms that must be satisfied for the transfer to occur, the buyer's funds are held in escrow on the blockchain, and the funds are release. ICP's reverse gas fee concept makes this entirely free to the user, with the gas fees being paid for by the maintainer. By doing this, we can eliminate one of the biggest additional costs associated with purchasing property, making homeownership more accessible to Canadians in the midst of the ongoing housing crisis.

## 💡 Key Features
- **Buyer and Seller Portals:** Separate login portals for buyers and sellers.
- **Escrow Replacement:** Enable secure transactions without traditional escrow fees.
- **User-Friendly Interface:** Simple and intuitive design to facilitate real estate transactions.

## 🚪 User Flow
1. **Login:** Users can log in as either a buyer or a seller.
2. **Buyer Portal:** Allows buyers to browse listings, make offers, and manage transactions.
3. **Seller Portal:** Provides sellers with tools to list properties, accept offers, and handle sales.

## 🛠️ Technology Stack
- **Frontend:** React.js
- **Styling:** CSS
- **Routing:** React Router
- **Deployment:** Vercel (eventually ICP platform)
- **L1:** ICP (Motoko language pack)
- **Ecosystems:** MetaMask
- **Version Management:** Git/GitHub (this page!)

## Future Improvements
 - Add a feature to transfer the title deed to a property in exchange for monetary payment (eliminating title companies)
 - Add a portal for real estate lawyers to upload written contracts and utilizing OCR to generate a Motoko smart contract based on the natural language in the contract
 - Allow users to change the currency with which they pay for property (allow for certain cryptocurrencies)
 - Allow users to upload important documentation associated with purchasing a house and utilize OCR to ensure that all information is in line with the terms outlined in the smart contract.

## 🚀 Running the Project
### Our project's been deployed online at https://escrow-shield.vercel.app/, just click the link to run through our project!
