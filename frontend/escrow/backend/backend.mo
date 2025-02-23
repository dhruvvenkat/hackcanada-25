import Nat "mo:base/Nat";
actor class backend() {
    let placeholder = 0;
    let propertyAddress = "";
    let sellerWalletID = "";
    let buyerWalletID = "";
    let inputtedSellerID = "";
    let inputtedBuyerID = "";

    // sample buyer id: 0xB6499188a221B0b99D151ee623b67d3e56877D3d

    // 1. function to get the latest seller id, home address, property ID
    // 2. function to get the 

    // function to get property information and store it

    public query func getAPIInfo() : async Nat {
        placeholder;
    };

    public query func getSellerID() : async Nat {
        // get seller's wallet id
        // get address of the property
        // get postal code of the property
        placeholder;
    };

    public query func getLatestBuyerID() : async Nat{
        // get buyer's wallet id
        // get seller's ALLEGED wallet id
        // get buyer's property address

        placeholder;
    };

    // public func checkWalletAddresses(): async Bool {
        
    // };

}