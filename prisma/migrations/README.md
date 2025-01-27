# Migration History

## Overview
This document tracks the evolution of the database schema through migrations.

## Migrations

### 20241223223656_create_base_schema
- Initial schema setup
- Created core tables
- Set up basic relationships

### 20241228165314_add_automation_rules
- Added rules engine tables
- Implemented action tracking
- Set up automation triggers

### 20250102065518_implement_token_tracking
- Added token tracking capabilities
- Created token balance tables
- Implemented token history

### 20250102200737_refactor_user_token_schema
- Optimized user token relationships
- Removed unique constraint on user_id
- Improved query performance

### 20250103193523_extend_token_statistics
- Added support for multiple token types
- Enhanced statistical tracking
- Improved analytics capabilities

### 20250104044437_optimize_token_indexes
- Added performance indexes
- Optimized common queries
- Improved lookup speeds

### 20250104053417_add_token_metadata
- Added metadata support
- Enhanced token information
- Improved token details

### 20250108170751_integrate_telegram_support
- Added Telegram integration
- Created chat support tables
- Implemented message tracking 