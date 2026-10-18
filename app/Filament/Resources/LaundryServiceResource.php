<?php

namespace App\Filament\Resources;

use App\Filament\Resources\LaundryServiceResource\Pages;
use App\Models\LaundryService;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class LaundryServiceResource extends Resource
{
    protected static ?string $model = LaundryService::class;

    protected static ?string $navigationLabel = 'Laundry Services';

    protected static ?string $navigationIcon = 'heroicon-o-sparkles';

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
                        Forms\Components\TextInput::make('unit')
                            ->required()
                            ->maxLength(255)
                            ->placeholder('KES / kg'),
                        Forms\Components\TextInput::make('description')
                            ->required()
                            ->maxLength(255)
                            ->placeholder('Wash + fold, 24hr'),
                    ])->columns(2),
                Forms\Components\Section::make('Rate')
                    ->schema([
                        Forms\Components\TextInput::make('price')
                            ->required()
                            ->maxLength(255)
                            ->placeholder('250, 600–1,200 or +50%')
                            ->helperText('Exactly as shown on the site — a single price, a range, or a rush fee.'),
                        Forms\Components\TextInput::make('icon')
                            ->required()
                            ->maxLength(10)
                            ->default('✦')
                            ->placeholder('✦'),
                    ])->columns(2),
                Forms\Components\Section::make()
                    ->schema([
                        Forms\Components\Toggle::make('is_available')
                            ->label('Available')
                            ->default(true),
                    ]),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('icon')
                    ->label('Icon')
                    ->searchable(),
                Tables\Columns\TextColumn::make('title')
                    ->searchable()
                    ->sortable()
                    ->limit(30),
                Tables\Columns\TextColumn::make('price')
                    ->label('Rate')
                    ->searchable()
                    ->sortable(),
                Tables\Columns\TextColumn::make('unit')
                    ->searchable()
                    ->limit(15)
                    ->toggleable(),
                Tables\Columns\TextColumn::make('description')
                    ->label('Details')
                    ->limit(35)
                    ->toggleable(),
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
            'index' => Pages\ListLaundryServices::route('/'),
            'create' => Pages\CreateLaundryService::route('/create'),
            'edit' => Pages\EditLaundryService::route('/{record}/edit'),
        ];
    }
}
