-- migrate:up
CREATE TABLE IF NOT EXISTS applications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  legal_last_name VARCHAR(255) NOT NULL,
  legal_first_name VARCHAR(255) NOT NULL,
  middle_name VARCHAR(255) NULL,
  birth_date TIMESTAMPTZ NOT NULL,
  created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- migrate:down
DROP TABLE applications;
