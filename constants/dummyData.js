import { COLORS, icons } from '../constants';

export const confirmStatus = "C"
export const pendingStatus = "P"

export const expensesData = [
    {
        id: 1,
        name: "Education",
        icon: icons.education,
        color: COLORS.yellow,
        expenses: [
            {
                id: 1,
                title: "Tuition Fee",
                description: "Tuition fee",
                location: "tuition center",
                total: 100.00,
                status: confirmStatus,
                date: '02/06/2022'
            },
            {
                id: 2,
                title: "Arduino",
                description: "Hardware",
                location: "tuition center",
                total: 30.00,
                status: confirmStatus,
                date: '10/06/2022'
            },
            {
                id: 3,
                title: "Javascript Books",
                description: "Books",
                location: "Book Store",
                total: 20.00,
                status: confirmStatus,
                date: '20/06/2022'
            },
            {
                id: 4,
                title: "PHP Books",
                description: "Books",
                location: "Book Store",
                total: 20.00,
                status: confirmStatus,
                date: '20/06/2022'
            },
            {
                id: 19,
                title: "Tuition Fee",
                description: "Tuition fee",
                location: "tuition center",
                total: 100.00,
                status: confirmStatus,
                date: '02/07/2022'
            },
            {
                id: 20,
                title: "RFID Sensors",
                description: "Hardware",
                location: "tuition center",
                total: 25.00,
                status: confirmStatus,
                date: '10/07/2022'
            },
            {
                id: 21,
                title: "Flutter Books",
                description: "Books",
                location: "Book Store",
                total: 21.00,
                status: pendingStatus,
                date: '27/07/2022'
            },
            {
                id: 22,
                title: "GO Books",
                description: "Books",
                location: "Book Store",
                total: 22.00,
                status: pendingStatus,
                date: '27/07/2022'
            },
        ],
    },
    {
        id: 2,
        name: "Nutrition",
        icon: icons.food,
        color: COLORS.lightBlue,
        expenses: [
            {
                id: 5,
                title: "Vitamins",
                description: "Vitamin",
                location: "Pharmacy",
                total: 25.00,
                status: confirmStatus,
                date: '21/06/2022'
            },
            {
                id: 6,
                title: "Protein Powder",
                description: "Protein",
                location: "Pharmacy",
                total: 50.00,
                status: confirmStatus,
                date: '21/06/2022'
            },
            {
                id: 23,
                title: "Vitamins",
                description: "Vitamin",
                location: "Pharmacy",
                total: 25.00,
                status: pendingStatus,
                date: '28/07/2022'
            },
            {
                id: 24,
                title: "Protein Powder",
                description: "Protein",
                location: "Pharmacy",
                total: 50.00,
                status: pendingStatus,
                date: '28/07/2022'
            },

        ],
    },
    {
        id: 3,
        name: "Child",
        icon: icons.baby_car,
        color: COLORS.darkgreen,
        expenses: [
            {
                id: 7,
                title: "Toys",
                description: "Toy",
                location: "Toy Store",
                total: 25.00,
                status: confirmStatus,
                date: '05/06/2022'
            },
            {
                id: 8,
                title: "Baby Car Seat",
                description: "Baby equipment",
                location: "Baby Care Store",
                total: 100.00,
                status: confirmStatus,
                date: '05/06/2022'
            },
            {
                id: 9,
                title: "Pampers",
                description: "Baby's basic needs",
                location: "Supermarket",
                total: 100.00,
                status: confirmStatus,
                date: '08/06/2022'
            },
            {
                id: 10,
                title: "Baby T-Shirt",
                description: "T-Shirt",
                location: "Fashion Store",
                total: 20.00,
                status: confirmStatus,
                date: '08/06/2022'
            },
            {
                id: 25,
                title: "Pampers",
                description: "Baby's basic needs",
                location: "Supermarket",
                total: 100.00,
                status: pendingStatus,
                date: '28/07/2022'
            },
        ],
    },
    {
        id: 4,
        name: "Beauty & Care",
        icon: icons.healthcare,
        color: COLORS.peach,
        expenses: [
            {
                id: 11,
                title: "Skin Care product",
                description: "Skin care",
                location: "Pharmacy",
                total: 10.00,
                status: confirmStatus,
                date: '01/06/2022'
            },
            {
                id: 12,
                title: "Lotions",
                description: "Body",
                location: "Pharmacy",
                total: 50.00,
                status: confirmStatus,
                date: '01/06/2022'
            },
            {
                id: 13,
                title: "Face Mask",
                description: "Face",
                location: "Pharmacy",
                total: 50.00,
                status: confirmStatus,
                date: '01/06/2022'
            },
            {
                id: 14,
                title: "Sunscreen cream",
                description: "Face",
                location: "Pharmacy",
                total: 50.00,
                status: confirmStatus,
                date: '01/06/2022'
            },
            {
                id: 26,
                title: "Skin Care product",
                description: "skin care",
                location: "Pharmacy",
                total: 10.00,
                status: confirmStatus,
                date: '01/07/2022'
            },
            {
                id: 27,
                title: "Lotions",
                description: "Body",
                location: "Pharmacy",
                total: 50.00,
                status: confirmStatus,
                date: '01/07/2022'
            },
            {
                id: 28,
                title: "Face Mask",
                description: "Face",
                location: "Pharmacy",
                total: 50.00,
                status: confirmStatus,
                date: '01/07/2022'
            },
            {
                id: 29,
                title: "Sunscreen cream",
                description: "Face",
                location: "Pharmacy",
                total: 50.00,
                status: confirmStatus,
                date: '01/07/2022'
            },
        ],
    },
    {
        id: 5,
        name: "Sports",
        icon: icons.sports,
        color: COLORS.purple,
        expenses: [
            {
                id: 15,
                title: "Gym Membership",
                description: "Monthly Fee",
                location: "Gym",
                total: 45.00,
                status: confirmStatus,
                date: '01/06/2022'
            },
            {
                id: 16,
                title: "Gloves",
                description: "Gym Equipment",
                location: "Gym",
                total: 15.00,
                status: confirmStatus,
                date: '11/06/2022'
            },
            {
                id: 30,
                title: "Gym Membership",
                description: "Monthly Fee",
                location: "Gym",
                total: 45.00,
                status: confirmStatus,
                date: '01/07/2022'
            },
        ],
    },
    {
        id: 6,
        name: "Clothing",
        icon: icons.cloth,
        color: COLORS.red,
        expenses: [
            {
                id: 17,
                title: "T-Shirt",
                description: "Plain Color T-Shirt",
                location: "Mall",
                total: 20.00,
                status: confirmStatus,
                date: '29/06/2022'
            },
            {
                id: 18,
                title: "Jeans",
                description: "Blue Jeans",
                location: "Mall",
                total: 50.00,
                status: confirmStatus,
                date: '29/06/2022'
            },
            {
                id: 31,
                title: "T-Shirt",
                description: "Nirvana T-Shirt",
                location: "Mall",
                total: 100.00,
                status: confirmStatus,
                date: '25/07/2022'
            },
            {
                id: 32,
                title: "Jeans",
                description: "Black Jeans",
                location: "Mall",
                total: 50.00,
                status: pendingStatus,
                date: '29/07/2022'
            },
        ],
    }
]