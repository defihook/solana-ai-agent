#!/bin/bash

# Set error handling
set -e

# Check if prisma directory exists, if not create it
if [ ! -d "prisma" ]; then
  echo "Creating prisma directory..."
  mkdir -p prisma/migrations
fi

# Navigate to migrations directory
cd prisma/migrations || exit 1

# Define migration mappings
declare -A migrations=(
  ["20241223223656_inital"]="20241223223656_create_base_schema"
  ["20241228165314_rules_actions"]="20241228165314_add_automation_rules"
  ["20250102065518_add_message_tokens"]="20250102065518_implement_token_tracking"
  ["20250102200737_message_tokens_drop_unique_user_id"]="20250102200737_refactor_user_token_schema"
  ["20250103193523_token_stats_multiple_types"]="20250103193523_extend_token_statistics"
  ["20250104044437_"]="20250104044437_optimize_token_indexes"
  ["20250104053417_"]="20250104053417_add_token_metadata"
  ["20250108170751_add_telegram_chat_table"]="20250108170751_integrate_telegram_support"
)

# Function to rename migration with error handling
rename_migration() {
  local old_name=$1
  local new_name=$2
  
  if [ -d "$old_name" ]; then
    echo "Renaming $old_name to $new_name..."
    mv "$old_name" "$new_name"
  else
    echo "Warning: Directory $old_name not found, skipping..."
  fi
}

# Perform the renaming
for old_name in "${!migrations[@]}"; do
  rename_migration "$old_name" "${migrations[$old_name]}"
done

echo "Migration renaming process completed!"

# Validate the results
echo "Validating migrations..."
for new_name in "${migrations[@]}"; do
  if [ -d "$new_name" ]; then
    echo "✓ $new_name exists"
  else
    echo "✗ $new_name not found"
  fi
done 