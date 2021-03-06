const fs = require('fs');
const path = require('path');
const issuer = require('../services/issuer');

it('can issue / verify AgInspectionReport', async () => {
    const { verified, verifiableCredential } = await issuer.issue({
        credentialSubject: {
            id: 'did:example:123',
            type: "AgInspectionReport",
            facility: {
                type: "Place",
                globalLocationNumber: "7640114717895",
                geo: {
                    type: "GeoCoordinates",
                    latitude: "57.3577",
                    longitude: "11.6661"
                },
                address: {
                    type: "PostalAddress",
                    organizationName: "Reichert, Upton and Cronin",
                    streetAddress: "22690 O'Conner Brook",
                    addressLocality: "New Xanderstad",
                    addressRegion: "Georgia",
                    postalCode: "75439-7663",
                    addressCountry: "Azerbaijan"
                }
            },
            inspector: {
                type: "Inspector",
                person: {
                    type: "Person",
                    firstName: "Josiane",
                    lastName: "Kunze",
                    email: "Earnest.Quitzon@example.net",
                    phoneNumber: "555-872-5989",
                    worksFor: {
                        type: "Organization",
                        name: "Leffler, Bruen and Jenkins",
                        description: "Progressive 4th generation protocol",
                        address: {
                            type: "PostalAddress",
                            streetAddress: "19578 Keon Drives",
                            addressLocality: "North Lonie",
                            addressRegion: "Michigan",
                            postalCode: "69422",
                            addressCountry: "Saudi Arabia"
                        },
                        email: "Marion.Ernser@example.org",
                        phoneNumber: "555-728-6517"
                    },
                    jobTitle: "National Data Producer"
                },
                credential: [
                    {
                        type: "Credential",
                        credentialCategory: "Future Usability Associate",
                        credentialValue: "Engineer"
                    },
                    {
                        type: "Credential",
                        credentialCategory: "Future Division Administrator",
                        credentialValue: "Designer"
                    },
                    {
                        type: "Credential",
                        credentialCategory: "Dynamic Operations Analyst",
                        credentialValue: "Officer"
                    }
                ]
            },
            shipment: {
                type: "ParcelDelivery",
                deliveryAddress: {
                    type: "PostalAddress",
                    organizationName: "Swift, Kutch and Hyatt",
                    streetAddress: "276 Ara Avenue",
                    addressLocality: "Langport",
                    addressRegion: "Texas",
                    postalCode: "49148-8045",
                    addressCountry: "Iceland"
                },
                originAddress: {
                    type: "PostalAddress",
                    organizationName: "Tillman Group",
                    streetAddress: "4538 Elna Stravenue",
                    addressLocality: "Port Jedside",
                    addressRegion: "Wyoming",
                    postalCode: "64282",
                    addressCountry: "Mayotte"
                },
                trackingNumber: "935690808362",
                products: [
                    {
                        type: "Product",
                        manufacturer: {
                            type: "Person",
                            firstName: "Lance",
                            lastName: "Ernser",
                            email: "Jimmy49@example.net",
                            phoneNumber: "555-675-3201",
                            worksFor: {
                                type: "Organization",
                                name: "Monahan Group",
                                description: "Synergistic grid-enabled middleware",
                                address: {
                                    type: "PostalAddress",
                                    streetAddress: "48520 Gladyce Passage",
                                    addressLocality: "Lake Aminabury",
                                    addressRegion: "Tennessee",
                                    postalCode: "14017-8234",
                                    addressCountry: "Kuwait"
                                },
                                email: "Kaci.Schamberger80@example.org",
                                phoneNumber: "555-803-4773"
                            },
                            jobTitle: "Lead Mobility Producer"
                        },
                        name: "Rustic Granite Salad",
                        description: "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
                        sizeOrAmount: {
                            type: "QuantitativeValue",
                            unitCode: "hg/ha",
                            value: "2259"
                        },
                        weight: {
                            type: "QuantitativeValue",
                            unitCode: "hg/ha",
                            value: "4192"
                        },
                        sku: "414883292238"
                    }
                ]
            },
            applicant: {
                type: "Organization",
                name: "Kutch, Dietrich and Reichel",
                description: "Reduced web-enabled extranet",
                address: {
                    type: "PostalAddress",
                    streetAddress: "8843 O'Kon Prairie",
                    addressLocality: "Tyreeton",
                    addressRegion: "New Jersey",
                    postalCode: "27928-0035",
                    addressCountry: "Burundi"
                },
                email: "Gideon4@example.com",
                phoneNumber: "555-727-9797"
            },
            inspectionDate: "11-2-2020",
            inspectionType: "Food Safety",
            observation: [
                {
                    type: "Observation",
                    property: {
                        type: "MechanicalProperty",
                        identifier: "ISO 1352",
                        name: "Torque-controlled fatigue testing",
                        description: "ISO 1352:2011 specifies the conditions for performing torsional, constant-amplitude, nominally elastic stress fatigue tests on metallic specimens without deliberately introducing stress concentrations. The tests are carried out at ambient temperature (ideally at between 10 °C and 35 °C) in air by applying a pure couple to the specimen about its longitudinal axis."
                    },
                    measurement: {
                        type: "MeasuredValue",
                        value: "00.00",
                        unitCode: "UNKNOWN"
                    }
                },
                {
                    type: "Observation",
                    property: {
                        type: "MechanicalProperty",
                        identifier: "ISO 1352",
                        name: "Torque-controlled fatigue testing",
                        description: "ISO 1352:2011 specifies the conditions for performing torsional, constant-amplitude, nominally elastic stress fatigue tests on metallic specimens without deliberately introducing stress concentrations. The tests are carried out at ambient temperature (ideally at between 10 °C and 35 °C) in air by applying a pure couple to the specimen about its longitudinal axis."
                    },
                    measurement: {
                        type: "MeasuredValue",
                        value: "00.00",
                        unitCode: "UNKNOWN"
                    }
                },
                {
                    type: "Observation",
                    property: {
                        type: "ChemicalProperty",
                        name: "Lutetium",
                        formula: "Lu",
                        inchi: "InChI=1S/Lu",
                        inchikey: "OHSVLFRHMCKCQY-UHFFFAOYSA-N"
                    },
                    measurement: {
                        type: "MeasuredValue",
                        value: "100.00",
                        unitCode: "P1"
                    }
                },
                {
                    type: "Observation",
                    property: {
                        type: "MechanicalProperty",
                        identifier: "ISO 148",
                        name: "Charpy Impact Strength Test",
                        description: "ISO 148-1:2016 specifies the Charpy (V-notch and U-notch) pendulum impact test method for determining the energy absorbed in an impact test of metallic materials. This part of ISO 148 does not cover instrumented impact testing, which is specified in ISO 14556."
                    },
                    measurement: {
                        type: "MeasuredValue",
                        value: "66.502",
                        unitCode: "B13"
                    }
                }
            ]
        }
    }, [
        'https://www.w3.org/2018/credentials/v1',
        'https://w3id.org/traceability/v1',
    ]);
    expect(verified).toBe(true);
    fs.writeFileSync(path.resolve(__dirname, '../../../docs/credentials/AgInspectionReport.json'), JSON.stringify(verifiableCredential, null, 2));
});
