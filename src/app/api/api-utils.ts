export interface SearchOptions {
  username?: string;
  followers?: number;
  repos?: number;
  location?: number;
  email?: number;
}

const addParam = (options: SearchOptions, query: string, param: keyof SearchOptions) => {
  if (options[param]) {
    return query + `+${param}:${options[param]}`;
  }
  return query;
};

export const queryConstructor = (options: SearchOptions) => {
  let query = 'q=';

  if (options.username) {
    query += options.username;
  }
  query = addParam(options, query, 'followers');
  query = addParam(options, query, 'repos');
  query = addParam(options, query, 'location');
  query = addParam(options, query, 'email');

  return query;
};
