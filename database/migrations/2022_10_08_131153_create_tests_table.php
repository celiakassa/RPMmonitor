<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tests', function (Blueprint $table) {
            $table->id();
            $table->date('test_date'); 
            $table->integer('RPM');
            $table->foreignId("country_id")->constrained()->onDelete("cascade");
            $table->foreignId("region_id")->constrained()->onDelete("cascade");
            $table->foreignId("city_id")->constrained()->onDelete("cascade");
            $table->foreignId("day_slice_id")->constrained()->onDelete("cascade");
            $table->foreignId("provider_id")->constrained()->onDelete("cascade");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tests');
    }
};
