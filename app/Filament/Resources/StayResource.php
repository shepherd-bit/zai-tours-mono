<?php

namespace App\Filament\Resources;

use App\Filament\Resources\StayResource\Pages;
use App\Models\Stay;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class StayResource extends Resource
{
    protected static ?string $model = Stay::class;

    protected static ?string $navigationLabel = 'Stays';

    protected static ?string $navigationIcon = 'heroicon-o-building-office-2';

    protected static ?string $recordTitleAttribute = 'title';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Section::make()
                    ->schema([
                        Forms\Components\TextInput::make('title')
                            ->required()
                            ->maxLength(255),
                        Forms\Components\TextInput::make('location')
                            ->required()
                            ->maxLength(255),
                        Forms\Components\TextInput::make('airbnb_url')
                            ->url()
                            ->maxLength(255)
                            ->placeholder('https://www.airbnb.com/...'),
                    ])->columns(2),
                Forms\Components\Section::make('Details')
                    ->schema([
                        Forms\Components\TextInput::make('price_per_night')
                            ->numeric()
                            ->required()
                            ->minValue(0)
                            ->prefix('KES'),
                        Forms\Components\TextInput::make('currency')
                            ->default('KES')
                            ->maxLength(3)
                            ->required(),
                        Forms\Components\TextInput::make('rating')
                            ->numeric()
                            ->minValue(0)
                            ->maxValue(5)
                            ->step(0.1)
                            ->placeholder('4.9'),
                        Forms\Components\TextInput::make('max_guests')
                            ->numeric()
                            ->required()
                            ->minValue(1),
                        Forms\Components\TextInput::make('bedrooms')
                            ->placeholder('3BR')
                            ->maxLength(255),
                    ])->columns(2),
                Forms\Components\Section::make('Amenities')
                    ->schema([
                        Forms\Components\TagsInput::make('tags')
                            ->placeholder('Balcony, Gated Security, Washer')
                            ->columnSpanFull(),
                    ]),
                Forms\Components\Section::make()
                    ->schema([
                        Forms\Components\Toggle::make('is_superhost')
                            ->label('Superhost')
                            ->default(false),
                        Forms\Components\Toggle::make('is_available')
                            ->label('Available')
                            ->default(true),
                        Forms\Components\FileUpload::make('image')
                            ->directory('stays')
                            ->image()
                            ->maxSize(2048),
                    ])->columns(2),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\ImageColumn::make('image')
                    ->label('Image')
                    ->square(),
                Tables\Columns\TextColumn::make('title')
                    ->searchable()
                    ->sortable()
                    ->limit(30),
                Tables\Columns\TextColumn::make('location')
                    ->searchable()
                    ->limit(30)
                    ->toggleable(),
                Tables\Columns\TextColumn::make('price_per_night')
                    ->money('KES')
                    ->sortable(),
                Tables\Columns\TextColumn::make('rating')
                    ->badge()
                    ->color('warning')
                    ->formatStateUsing(fn (string $state): string => '★ '.$state),
                Tables\Columns\IconColumn::make('is_superhost')
                    ->boolean()
                    ->sortable(),
                Tables\Columns\IconColumn::make('is_available')
                    ->label('Available')
                    ->boolean()
                    ->sortable(),
                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                Tables\Filters\TernaryFilter::make('is_superhost')
                    ->label('Superhost'),
                Tables\Filters\TernaryFilter::make('is_available')
                    ->label('Available'),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListStays::route('/'),
            'create' => Pages\CreateStay::route('/create'),
            'edit' => Pages\EditStay::route('/{record}/edit'),
        ];
    }
}
