export interface event {
  eventId: string;
  namePub: string;
  description: string;
  currencyIso: string;
  dateFrom: string;
  dateTo: string;
  headerImageUrl: string;
  place: string;
}

export interface eventTickets {
  ticketTypes: [
    {
      id: string;
      name: string;
      price: number;
    }
  ];
  seatRows: [
    {
      seatRow: number;
      seats: [
        {
          seatId: string;
          place: number;
          ticketTypeId: string;
        }
      ];
    }
  ];
}
