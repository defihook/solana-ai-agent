#!/bin/bash

# Navigate to migrations directory
cd prisma/migrations

# Check if migrations exist
if [ ! -d "20241223223656_create_base_schema" ]; then
  echo "Error: Base schema migration not found"
  exit 1
fi

# Validate migration order
declare -a migrations=(
  "20241223223656_create_base_schema"
  "20241228165314_add_automation_rules"
  "20250102065518_implement_token_tracking"
  "20250102200737_refactor_user_token_schema"
  "20250103193523_extend_token_statistics"
  "20250104044437_optimize_token_indexes"
  "20250104053417_add_token_metadata"
  "20250108170751_integrate_telegram_support"
)

for migration in "${migrations[@]}"; do
  if [ ! -d "$migration" ]; then
    echo "Error: Migration $migration not found"
    exit 1
  fi
  
  # Check for migration.sql file
  if [ ! -f "$migration/migration.sql" ]; then
    echo "Error: $migration/migration.sql not found"
    exit 1
  fi
done

echo "All migrations validated successfully!" 