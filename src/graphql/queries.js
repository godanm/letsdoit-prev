/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getActivity = `query GetActivity($id: ID!) {
  getActivity(id: $id) {
    id
    tripid {
      id
      groupid {
        id
        groupname
      }
      tripdestination
      tripstart
      tripend
      thumpbnails
      status
      remarks
    }
    activityname
    description
    title
    location
    cost
    status
    todos {
      id
      title
      description
      duedate
      startdate
      status
      owners {
        id
        username
        phone
      }
    }
  }
}
`;
export const listActivitys = `query ListActivitys(
  $filter: ModelActivityFilterInput
  $limit: Int
  $nextToken: String
) {
  listActivitys(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      tripid {
        id
        tripdestination
        tripstart
        tripend
        thumpbnails
        status
        remarks
      }
      activityname
      description
      title
      location
      cost
      status
      todos {
        id
        title
        description
        duedate
        startdate
        status
      }
    }
    nextToken
  }
}
`;
export const getTrip = `query GetTrip($id: ID!) {
  getTrip(id: $id) {
    id
    groupid {
      id
      groupname
      groupmembers {
        id
        username
        phone
      }
      groupadmins {
        id
        username
        phone
      }
    }
    tripdestination
    tripstart
    tripend
    thumpbnails
    status
    remarks
  }
}
`;
export const listTrips = `query ListTrips(
  $filter: ModelTripFilterInput
  $limit: Int
  $nextToken: String
) {
  listTrips(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      groupid {
        id
        groupname
      }
      tripdestination
      tripstart
      tripend
      thumpbnails
      status
      remarks
    }
    nextToken
  }
}
`;
export const getGroup = `query GetGroup($id: ID!) {
  getGroup(id: $id) {
    id
    groupname
    groupmembers {
      id
      username
      phone
    }
    groupadmins {
      id
      username
      phone
    }
  }
}
`;
export const listGroups = `query ListGroups(
  $filter: ModelGroupFilterInput
  $limit: Int
  $nextToken: String
) {
  listGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      groupname
      groupmembers {
        id
        username
        phone
      }
      groupadmins {
        id
        username
        phone
      }
    }
    nextToken
  }
}
`;
export const getUsers = `query GetUsers($id: ID!) {
  getUsers(id: $id) {
    id
    username
    phone
  }
}
`;
export const listUserss = `query ListUserss(
  $filter: ModelUsersFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserss(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      username
      phone
    }
    nextToken
  }
}
`;
export const getToDo = `query GetToDo($id: ID!) {
  getToDo(id: $id) {
    id
    title
    description
    duedate
    startdate
    status
    owners {
      id
      username
      phone
    }
  }
}
`;
export const listToDos = `query ListToDos(
  $filter: ModelToDoFilterInput
  $limit: Int
  $nextToken: String
) {
  listToDos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      description
      duedate
      startdate
      status
      owners {
        id
        username
        phone
      }
    }
    nextToken
  }
}
`;
